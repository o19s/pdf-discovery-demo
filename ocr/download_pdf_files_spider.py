import scrapy
from scrapy.http import Request
import os

class BlogSpider(scrapy.Spider):
    name = "pwc_tax"

    allowed_domains = ["www.federalreserve.gov"]
    start_urls = [
        "https://www.federalreserve.gov/newsevents/speech/2018-speeches.htm",
        "https://www.federalreserve.gov/newsevents/speech/2017-speeches.htm",
        "https://www.federalreserve.gov/newsevents/speech/2016-speeches.htm",
        "https://www.federalreserve.gov/newsevents/speech/2015-speeches.htm",
        "https://www.federalreserve.gov/newsevents/speech/2014-speeches.htm",
        "https://www.federalreserve.gov/newsevents/speech/2013-speeches.htm",
        "https://www.federalreserve.gov/newsevents/speech/2012-speeches.htm",
        "https://www.federalreserve.gov/newsevents/speech/2011-speeches.htm",
        "https://www.federalreserve.gov/newsevents/speech/2010speech.htm",
        "https://www.federalreserve.gov/newsevents/speech/2009speech.htm",
        "https://www.federalreserve.gov/newsevents/speech/2008speech.htm",
        "https://www.federalreserve.gov/newsevents/speech/2007speech.htm",
        "https://www.federalreserve.gov/newsevents/speech/2006speech.htm"
    ]

    def parse(self, response):
        for next_page in response.css('a'):
            print("looking at " + next_page.attrib['href'])
            print("newsevents/speech" in next_page.attrib['href'])
            if "newsevents/speech" in next_page.attrib['href']:
                yield response.follow(next_page, self.parse_speech)

        for href in response.css('div#all_results h3 a::attr(href)').extract():
            yield Request(
                url=response.urljoin(href),
                callback=self.parse_article
            )

    def parse_speech(self, response):
        for href in response.css('a[href$=".pdf"]::attr(href)').extract():
            yield Request(
                url=response.urljoin(href),
                callback=self.save_pdf
            )

    def save_pdf(self, response):
        print("in save pdf")
        path = response.url.split('/')[-1]

        path = "load_testing_files/" + path
        self.logger.info('Saving PDF %s', path)
        with open(path, 'wb') as f:
            f.write(response.body)
