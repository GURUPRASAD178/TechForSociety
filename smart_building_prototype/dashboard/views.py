from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'dashboard/index.html')

def lighting(request):
    return render(request, 'dashboard/lighting.html')

def hvac(request):
    return render(request, 'dashboard/hvac.html')

def security(request):
    return render(request, 'dashboard/security.html')

def water(request):
    return render(request, 'dashboard/water.html')

def waste(request):
    return render(request, 'dashboard/waste.html')

def energy(request):
    return render(request, 'dashboard/energy.html')
