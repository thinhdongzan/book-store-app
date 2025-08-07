from django.db import models
from products.models import Book
from django.contrib.auth.models import User
# Create your models here.
class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    def __str__(self):
        return f"Cart of {self.user.username}"

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    amount = models.PositiveIntegerField(default=1)
    def __str__(self):
        return f"{self.amount} of {self.book.title} in {self.cart.user.username}'s cart"