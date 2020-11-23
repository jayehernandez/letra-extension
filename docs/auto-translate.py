#This tool is meant to be used along with the Letra translation extention guide on how to add a language found here https://github.com/jayehernandez/letra-extension/blob/master/docs/new_language.md

#Step 1- Make sure you can run Python on your computer
#Step 2- Add a copy of the Google Sheet containing the 3000 most used english words to your Google Drive. You can find a copy here https://docs.google.com/spreadsheets/d/1XFWxJPyVvlG-XL_EFGZ2BUTII0Gr3ovoKPrjfEi-a14/edit#gid=0
#Step 3- Follow the guide to set up API access to your Google Drive found here http://automatetheboringstuff.com/2e/chapter14/
#Step 4- Fill in the variables below with the necessary info
#Step 5- Run this file to auto-translate and fill in the words in the Google Sheet

#Any additional questions, feel free to reach out to me at https://github.com/WyldWanderer


import ezsheets

#Targets the Google Sheet file and the first sheet in the file, be sure to add the Google Sheet ID
ss = ezsheets.Spreadsheet('ADD GOOGLE SHEET ID HERE')
sheet = ss[0]

#Creates a loop that fills in the cells in the first column of the Google Sheet with the Google Translate formula, add the language to be translated to below
i = 2
while i <= 3001:
    sheet['A'+ str(i)] = '= GOOGLETRANSLATE("' + sheet['B'+ str(i)] + '", "en", "LANGUAGE TO TRANSLATE TO")'
    i += 1


