# Generated by Django 2.2.3 on 2020-03-24 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('picture', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=200)),
                ('label', models.CharField(max_length=20)),
            ],
        ),
        migrations.DeleteModel(
            name='CNNnet',
        ),
    ]
