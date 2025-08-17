from rest_framework import generics
from products.models import Book
from .serializers import BookSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class BookList(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    lookup_field = 'pk'  # Use 'pk' as the lookup field