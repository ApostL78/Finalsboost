from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class RuHomeView(TemplateView):
    template_name = "src/index_ru.html"


class EnHomeView(TemplateView):
    template_name = "src/index_en.html"
