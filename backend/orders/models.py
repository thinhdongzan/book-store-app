from django.db import models
from django.contrib.auth.models import User
from products.models import Book
# Create your models here.
class Order(models.Model):
    class OrderStatus(models.TextChoices):
        PENDING = 'pending'
        PROCESSING = 'processing'
        SHIPPED = 'shipped'
        DELIVERED = 'delivered'
        CANCELLED = 'cancelled'

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=OrderStatus.choices, default=OrderStatus.PENDING)
    def __str__(self):
        return f"Order {self.id} of {self.user.username}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    amount = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)