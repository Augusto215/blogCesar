from django import template

register = template.Library()

@register.filter
def hasattr(value, arg):
    return hasattr(value, arg)
