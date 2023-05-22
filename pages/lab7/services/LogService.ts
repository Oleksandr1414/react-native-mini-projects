export default class LogService {
  write(m: string) {
    console.log("[Log]: ", m);
    return { response: { success: true } };
  }
}
