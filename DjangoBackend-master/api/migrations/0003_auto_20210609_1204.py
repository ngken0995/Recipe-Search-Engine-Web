# Generated by Django 3.1.4 on 2021-06-09 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_favorite'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favorite',
            name='token_id',
            field=models.CharField(max_length=100),
        ),
    ]