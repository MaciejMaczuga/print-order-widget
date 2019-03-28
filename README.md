
## Problem:
Every day at work, I have to copy the order numbers from the excel file and paste them one by one into the company's search engine (web application), wait a few seconds and after loading the order page, slide down the page, click the "print order" button, choose the type of template to print (simple , full) between straight and full. Next, a page formatted under the printout opens in the new tab.

I have to repeat it sometimes for 20 orders, sometimes for 50 orders etc. The choice of the mentioned template for printing (simple, full) is based on the letters attached to the numbers. If an order number 111234 appears in the excel column, eg twice, respectively with letters A and B, I have to print one "full" order which contains information about sub-points marked with letters and order specifica- tion, and two "shortened" with the corresponding letters.

The application does not offer print for more than one order. Pages with templates for printing open after the appropriate request containing the session number, order number, sub-point letter if the type of template selected is "simple".

## What can I do:
Using a chrome browser plugin that allows you to use your own styles and JS scripts on selected domains and subdomains, I created a small widget that, apart from useful links to speed up navigation through the application, allows you to skip several steps of the dizzying task.


## How it's working.

The script formats the pasted numbers in the right way. Erasing whitespace, deleting letters or using them in the right place of an HTTP request depending on the template selection, and also copying sessionID from the cookie and appending it to the request.

## What I managed to achieve:

Considering that I could only operate on the frontend layer, and I do not know the techniques to omit "print dialog window" in the browser, I wrote a script that allows you to paste all orders from the excel file immediately, and after clicking the button opens the tab for each order.

We managed to skip copying and pasting a single order and waiting for the result of a single search. Plenty of alt + tabing between the browser and the excel file has been removed from the process.

Extra 15 minutes each day to make some coffee.

## Unfortunately, you will not see how it works because as I wrote it is a script that works only on specific pages of a specific application, which is not possible for obvious reasons.
