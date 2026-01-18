import { NextResponse } from 'next/server';
import { getAllProducts, addProduct } from '../../../lib/product-db';

export async function GET(request) {
  try {
    // Return all products (public access)
    const allProducts = getAllProducts();
    return NextResponse.json(allProducts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // For development: Check for authorization header
    const authHeader = request.headers.get('authorization');
    
    // For this mock system, we'll check if the header contains our mock token
    const isValidAuth = authHeader && authHeader.includes('mock-token');
    
    // In production, you would verify the actual session cookie or JWT
    if (!isValidAuth) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { name, description, price, image, category } = body;
    
    // Validate required fields
    if (!name || !description || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create new product using the shared database function
    const newProduct = addProduct({
      name,
      description,
      price,
      image,
      category
    });
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}