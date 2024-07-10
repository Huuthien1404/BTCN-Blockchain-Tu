import SHA256 from "crypto-js/sha256";

// Lớp Block đại diện cho một khối trong blockchain
class Block {
  timestamp: string;
  transactions: any;
  previousHash: string;
  hash: string;
  nonce: number;
  validator: string;

  // Hàm khởi tạo cho mỗi block
  constructor(
    timestamp: string,
    transactions: any,
    previousHash = "",
    validator = ""
  ) {
    this.timestamp = timestamp;
    this.transactions = transactions; // Dữ liệu giao dịch trong block
    this.previousHash = previousHash; // Hàm băm của block trước
    this.hash = this.caculateHash(); // Hàm băm của block hiện tại
    this.nonce = 0; // Khởi tạo nonce với giá trị 0
    this.validator = validator; // Người xác thực (validator) của block này
  }

  // Tính toán hàm băm của block
  caculateHash() {
    return SHA256(
      this.previousHash +
        this.timestamp +
        JSON.stringify(this.transactions) +
        this.nonce +
        this.validator
    ).toString();
  }
}

export default Block;
