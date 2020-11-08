# Generated by Django 3.1.3 on 2020-11-03 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NoiseAudioWeb',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('slug', models.SlugField(max_length=250, unique=True)),
                ('about', models.TextField()),
                ('owner', models.CharField(max_length=250)),
                ('jacktrip_hub_server', models.CharField(max_length=15)),
                ('influxdb', models.CharField(max_length=20)),
                ('stream_address', models.CharField(max_length=100)),
                ('file_storage', models.CharField(max_length=100)),
            ],
        ),
    ]