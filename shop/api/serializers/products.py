from rest_framework import serializers
from ..models import Product


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    year = serializers.SerializerMethodField()
    memory = serializers.SerializerMethodField()
    camera = serializers.SerializerMethodField()
    battery = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "price",
            "description",
            "image",
            "year",
            "memory",
            "camera",
            "battery",
        ]

    def get_image(self, obj):
        images = [
            "11.png", "12.png", "13.png", "14.png",
            "s22.png", "a54.png", "mi13.png"
        ]
        return f"/assets/{images[obj.id % len(images)]}"

    def get_year(self, obj):
        return 2024

    def get_memory(self, obj):
        return "128GB"

    def get_camera(self, obj):
        return "48MP"

    def get_battery(self, obj):
        return "4500mAh"


class ProductSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("name", "price", "description")