from django.conf.urls import patterns, include, url
from inlog.views import IndexView
from django.contrib import admin

from rest_framework import routers

from authentication.views import AccountViewSet
from authentication.views import LoginView, LogOutView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'inlog.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/v1/', include(router.urls)),

    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogOutView.as_view(), name='logout'),

    url(r'^.*', IndexView.as_view(), name='index'),

)
