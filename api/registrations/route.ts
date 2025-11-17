import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const registrations = await prisma.registration.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, data: registrations });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
