from .views import BookList
from rest_framework.routers import DefaultRouter

app_name = 'api'

router = DefaultRouter()
router.register(r'books', BookList, basename='book')
urlpatterns = router.urls
