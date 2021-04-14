## Popular-names 

What names are trendy? Timeless? What names were popular in our grandparents' generations, but are seeing a fall in popularity? 

## Overview 

Script that uses SQLAlchemy to access a database of US Baby Names and query the following data: 
- Most popular names (overall)
- Most popular names by assigned sex
- Most popular names by decade (1880 - 2014)
- Least popular names (overall, by sex, by decade)

## About the dataset 

The US baby names dataset is a CSV file obtained from [Kaggle]('https://www.kaggle.com/kaggle/us-baby-names?select=NationalNames.csv'). The data is collected from US Social Security applications from Data.gov. 

Due to the large size of the file, the CSV was loaded into a PostGreSQL database for simple querying with SQLAlchemy. 

## Webpage 

The queried data was added to a python dictionary and exported as a JSON file. Using Javascript and Plotly, I accessed the dictionaries to create plots for each query. 

## Tools used 

Python/Jupyter Notebook/Pandas, PostGreSQL/SQLAlchemy, Javascript/Bootstrap, HTML/CSS. 

## Limitations 

For privacy reasons, not all data is provided. Unique names (defined as >5 names per year by area) are not included in the dataset. 

## Future plans 
* Use State names csv to pull the same information by state 
* Keep sex data and create stacked charts
* Information on unisex names
* API query that can pull data based on user input 

