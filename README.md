# Cultivate Project

![Live App](https://cultivatejoey.herokuapp.com/)

This is my interpretation of the table from image made by the designer. You can click invite to send an invite which will show up with a date in the appropriate column. Once an invite is sent, the remove button displays which allows you to delete someone. Currently the buttons are only functional for the managers and not for the direct reports, but that should give you an idea of functionality. 

I have displayed the direct reports under each of the managers, but did not get around to implementing the drop down feature from how it looks in the diagram. Since the invites are just stored to the database and the actual activation hasn't been implemented the "activated" column just shows pending for every manager and direct report.

![app](https://i.imgur.com/4lC1Xzw.png)

## Database Schema
For my schema I created a many to many relationship between managers and direct reports. Obviously a manager can have many people who report to them, and I made the assumption that a employee can report to many managers.

Invites can belong to either a manager or a direct report.

![Schema](https://i.imgur.com/j40AsEP.png)