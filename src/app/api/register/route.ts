import { NextResponse } from "next/server";
import { google } from 'googleapis';

// Cấu hình Google Sheets API
async function appendToSheet(data: any) {
  try {
    // Lấy thông tin service account từ biến môi trường
    // Bạn sẽ cần thêm các biến này vào .env.local
    const credentials = {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    };

    const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const SHEET_NAME = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1';

    // Tạo JWT auth client
    const auth = new google.auth.JWT(
      credentials.client_email,
      undefined,
      credentials.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    // Tạo sheets client
    const sheets = google.sheets({ version: 'v4', auth });

    // Lấy ngày và giờ hiện tại
    const now = new Date();
    const timestamp = now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    // Thêm timestamp vào data
    const values = [
      [timestamp, data.fullName, data.phone, data.productInterest || '']
    ];

    // Append dữ liệu vào sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log('Thông tin đã được lưu vào Google Sheets:', response.data);
    return response.data;
  } catch (error) {
    console.error('Google Sheets error:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, productInterest } = body;
    console.log("Received data:", body);

    // Lưu thông tin vào Google Sheets
    await appendToSheet({
      fullName,
      phone,
      productInterest
    });

    return NextResponse.json({ message: "Thông tin đã được lưu vào sheet thành công" });
  } catch (error) {
    console.error("Sheet error:", error);
    return NextResponse.json(
      { error: "Không thể lưu thông tin" },
      { status: 500 }
    );
  }
}
