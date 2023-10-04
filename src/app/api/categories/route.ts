import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    id: faker.string.uuid(),
    name: faker.company.buzzNoun()
  });
}