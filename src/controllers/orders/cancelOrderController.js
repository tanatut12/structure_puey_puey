// เส้นทางสำหรับยกเลิกคำสั่งซื้อ
// Route for deleting an order
app.delete('/orders/:orderId', authenticateToken, async (req, res) => {
  const { orderId } = req.params;

  try {
    // ค้นหาและลบคำสั่งซื้อในฐานข้อมูล
    // Find and delete the order in the database
    const deletedOrder = await order.findByIdAndDelete(orderId);

    // หากไม่พบคำสั่งซื้อ ส่งค่าสถานะ 404 ให้ระบบ
    // If order not found, send status 404
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // คืนข้อความว่าการลบคำสั่งซื้อสำเร็จ
    // Return success message
    return res.json({
      message: 'Order deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting order:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});
