from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Publisher(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Book(models.Model):
    class BookLanguage(models.TextChoices):
        ENGLISH = 'en'
        VIETNAMESE = 'vi'
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    author = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    published_date = models.DateField()
    image = models.ImageField(upload_to='books/', null=True, blank=True)
    language = models.CharField(max_length=2, choices=BookLanguage.choices, default=BookLanguage.ENGLISH)
    stock = models.IntegerField()
    def __str__(self):
        return self.title