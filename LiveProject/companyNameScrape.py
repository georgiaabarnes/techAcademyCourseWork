import requests
from BeautifulSoup import BeautifulSoup

url = 'http://portlandtech.org/'
response = requests.get(url)
html = response.content

soup = BeautifulSoup(html)
table = soup.find('div', attrs={'id': 'fulllist'})

for row in table.findAll('li'):
	for link in row.findAll('a'):
		print link.text