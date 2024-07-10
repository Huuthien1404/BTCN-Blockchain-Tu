import Block from "./Block.ts";
// import Transaction from "./Transaction.ts";
import { getCurrentTime } from "@/helpers/index.ts";

// Lớp Blockchain đại diện cho toàn bộ chuỗi khối
class BlockChain {
  chain: Block[];
  difficulty: number;
  miningReward: number;
  validators: any; // { [address: string]: number }

  // Hàm khởi tạo cho blockchain
  constructor() {
    this.chain = [this.createGenesisBlock()]; // Khởi tạo chuỗi với block đầu tiên (Genesis Block)
    this.difficulty = 2; // Độ khó của thuật toán băm (không sử dụng trong PoS)
    this.miningReward = 100;
    this.validators = {}; // Danh sách các validators và số lượng stake của họ
  }

  // Tạo block đầu tiên trong chuỗi (Genesis Block)
  createGenesisBlock() {
    return new Block(getCurrentTime(), "Genesis block", "0");
  }

  // Lấy block mới nhất trong chuỗi
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // Lấy vị trí mới nhất trong chuỗi
  getLatestIndex() {
    return this.chain.length - 1;
  }

  // Thêm một validator mới vào danh sách validators
  addValidator(address: string, stake: any) {
    this.validators[address] = stake;
  }

  // Chọn validator để xác thực block tiếp theo dựa trên số lượng stake
  chooseValidator(): string {
    const sumOfStakes: any = Object.values(this.validators).reduce(
      (sum: any, stake: any) => sum + stake,
      0
    ); // Tổng số lượng stake của tất cả validators

    const rand = Math.random() * sumOfStakes; // Chọn một giá trị ngẫu nhiên trong tổng stake
    let cumulativeSum: any = 0;

    // Lựa chọn validator dựa trên xác suất tỉ lệ với stake của họ
    for (const [address, stake] of Object.entries(this.validators)) {
      cumulativeSum += stake;
      if (rand < cumulativeSum) {
        return address;
      }
    }

    return ""; // Trường hợp không có validator nào được chọn
  }

  // Thêm một block mới vào chuỗi
  addBlock(data: any): void {
    const newBlock = new Block(
      getCurrentTime(), // Thời gian hiện tại
      data, // Dữ liệu trong block
      this.getLatestBlock().hash, // Hàm băm của block trước
      this.chooseValidator() // Validator được chọn
    );

    this.chain.push(newBlock); // Thêm block mới vào chuỗi
  }

  // Kiểm tra tính hợp lệ của toàn bộ chuỗi
  isChainValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // Kiểm tra xem hàm băm của block hiện tại có đúng không
      if (currentBlock.hash !== currentBlock.caculateHash()) {
        return false;
      }

      // Kiểm tra xem hàm băm của block trước có khớp không
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

export default BlockChain;
