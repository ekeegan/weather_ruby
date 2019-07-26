#!/usr/bin/env ruby
# This tiny Ruby script simply calls the OpenWeatherMap API for the current waether in Los Angeles, CA and then queries the weather for
# another randomly selected US city.
#
# Version 1.0
# July-26-2019
# Erin Keegan
# Future improvements: Error handling, better output formatting.
##############
#Define
require 'open-uri'
require 'json'
require 'psych'
city = 'Los Angeles'
rand_city_set = ['Boston', 'Las Vegas', 'Charleston', 'New York', 'Dallas', 'Bangor', 'San Francisco']

#Main
system("clear")
puts ""
puts "Printing current weather for the city of #{city}, CA"
request = "http://api.openweathermap.org/data/2.5/weather?q=#{city}&units=imperial&appid=ef99eb85e5b205e9cd0f9a781c33f1e0"
output = open(request).readlines.join
print Psych.dump( JSON.parse(output) )

puts ""
puts "For companrison, here's the weather for another randomly selcected US city"
request = "http://api.openweathermap.org/data/2.5/weather?q=#{rand_city_set.sample}&units=imperial&appid=ef99eb85e5b205e9cd0f9a781c33f1e0"
output = open(request).readlines.join
print Psych.dump( JSON.parse(output) )
