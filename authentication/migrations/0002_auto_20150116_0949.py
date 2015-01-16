# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='user_type',
            field=models.IntegerField(default=0, choices=[(0, b'Werknemer'), (1, b'Werkgever'), (2, b'Admin')]),
            preserve_default=True,
        ),
    ]
