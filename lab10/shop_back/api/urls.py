from django.urls import path
from rest_framework.response import Response
from rest_framework.views import APIView
from .views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView
)
from api.views.custom import CategoryProductsAPIView

class ApiRoot(APIView):
    def get(self, request, *args, **kwargs):
        base = request.build_absolute_uri('')
        return Response({
            'message': 'Доступные API пути. Используй exact id вместо <product_id> и <category_id>.',
            'base_url': base,
            'routes': [
                'GET ' + base + 'products/',
                'GET ' + base + 'products/<product_id>/',
                'GET ' + base + 'categories/',
                'GET ' + base + 'categories/<category_id>/',
                'GET ' + base + 'categories/<category_id>/products/',
            ],
            'examples': {
                'all_products': base + 'products/',
                'one_product': base + 'products/1/',
                'all_categories': base + 'categories/',
                'one_category': base + 'categories/1/',
                'category_products': base + 'categories/1/products/',
            }
        })

urlpatterns = [
    path('', ApiRoot.as_view(), name='api-root'),
    path('products/', ProductListAPIView.as_view(), name='products-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),

    path('categories/', CategoryListAPIView.as_view(), name='categories-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]