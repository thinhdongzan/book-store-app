import django_filters
from .models import Book

class BookFilter(django_filters.FilterSet):
    category = django_filters.CharFilter(field_name='category__name', lookup_expr='iexact')
    language = django_filters.CharFilter(field_name='language', lookup_expr='iexact')
    publisher = django_filters.CharFilter(field_name='publisher__name', lookup_expr='iexact')
    price_min = django_filters.NumberFilter(field_name='price', lookup_expr='gte')
    price_max = django_filters.NumberFilter(field_name='price', lookup_expr='lte')
    
    class Meta:
        model = Book
        fields = {
            'title': ['icontains'],
            'author': ['icontains'],
        }