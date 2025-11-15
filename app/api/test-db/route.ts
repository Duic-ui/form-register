import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Test connection bằng cách count records
    const count = await prisma.registration.count();

    return NextResponse.json({
      success: true,
      message: "Kết nối database thành công!",
      registrationCount: count,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Kết nối database thất bại!",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
