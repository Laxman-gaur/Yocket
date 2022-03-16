# Yocket
Hi Team,  <br />

I have added all the APIs which were mentioned in the assignment.  <br />
I have used Microsoft SQL Server. You Can find credentials of DB in .env File. (I have made this SQL Server public for now).  <br />

Also, you can find postman collection - FeedPortal.postman_collection.json  <br />

------------------------------------------------------------------------------------ <br />
I have also added DB Schema File - FeedPortal.sql (But best would be to login into the DB by SSMS - You can find DB Creds in .env file) <br />
Note: - When Using SSMS <br />
Server Name: - feedportal.database.windows.net,1433 <br />
Authentication: - SQL Server Authentication <br />

------------------------------------------------------------------------------------ <br />
# Run this project
1. git clone https://github.com/Prateekagarwal9/Yocket.git  <br />
2. cd Yocket  <br />
3. npm install  <br />
4. npm start  <br />

------------------------------------------------------------------------------------ <br />
# Test this project
Team I have hosted it on App Engine also.
You just have to change http://localhost:3000 to https://feedportalyocket.azurewebsites.net/
Example: - https://feedportalyocket.azurewebsites.net/feed/fetchLikeOnComment?commentId=C-3

------------------------------------------------------------------------------------<br />
Question No: - 1
Consider a scenario where you are a big spiderman fan and the latest spiderman
movie has been released. You absolutely want to avoid spoilers on youtube, yet also
browse through daily video content. You decide to make a basic script that blocks all
spoiler videos on youtube. What should be the logic/solution to implement in this
scenario?
You can explain the answer in a textual format in bullet points

Answer: - 
There are multiple ways of doing this, As there are tools like Spoiler Protection 2.0 and Spoilers Blocker
As, we have to make script for that, So I will first identify the keywords like [spiderman, spoiler]. 
then we will find the cookies related with these key word
document.cookie="VISITOR_INFO1_LIVE=oKckVSqvaGw; path=/; domain=.youtube.com";
window.location.reload();
This we have to run in our Javascript console and I think it should work.
