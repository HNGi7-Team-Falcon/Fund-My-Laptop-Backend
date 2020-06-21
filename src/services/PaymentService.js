class PaymentService {
  async getAll(data) {
  const payments = await Payment.find({ userId: data.userId })
    return payments
  }
}
