Environment:
Angular CLI: 7.0.7
Node: 9.1.0
OS: win32 x64

*Installation:
run "npm install" in the directory where package.json is

create the file named "credentials.ts" in e2e directory with following content:

export const credentials = {
    email: "{{your-email}}"
    password: "{{your-password"
}

 I made this mechanism for little password protection.

compile the ts files with command: "tsc ./protractor.conf.ts -lib es2015

*Execution:
Run command: "ng e2e --dev-server-target="

---------------------------------------------------

Issues:
- In some places I struggled with clicking the buttons, so I used sleeps to not burn too much time on finding more professional resolution
- Sometimes when Protractor enter the credentials it is asking to enter them again - I did not investigate it
- Page objects have been extended up to the just up to the scope of the requirement. They would be greatly bigger(and there would be dozens more of them).

---------------------------------------------------

Exploratory testing:

- During exploratory session I focused on two aspects: drag and dropping around and checking the persistence. For the first one I just did the obvious. For the second I applied some changes and opened the documents and checked paths to them by opening those. The cases I tried will be shortly described below.

Cases for first aspect:
- try to move the node document 
- clicking on the documents 
- drag and drop parents, leaves in the same place 
- hide all of the children, moving parent to another parent, checking if they merge
- create not-linked list like parent->leaf->leaf -> ....-> leaf
- reordering brothers by drag and dropping just above each other
- reordering brothers by drag and dropping just below each other
- making parent-son into brothers
- making son-parent into brothers

Cases for the second aspect:
- apply some change and check path of all documents involved
- remove parent and see if the children are gone too
- rename the document and see if the path remains the same for it and for the children
- open page - go offline, drag and drop around - return connection - refresh the page
- 

Issues found:
- sometimes if parent have two children and both of them are leaves, one of them can have arrow-down markup and the other not (inconsistency no matter what documentation says). Maybe it happens when the parent becomes leaf, but I did not dig in
- I tried to make a parent to become brother to his children. It seems like it is not possible to make it in case the parent a father. you need to make all of the children brothers to the father first.

further testing:
- i Would need to have a real-world document that contains few hundred pages, to see the performance of it (and see if the save will be done quickly).
- check other browsers

note:
- I was playing around with the ui automation in two other languages (very small, just POC's ). Please visit https://github.com/pkautomation?tab=repositories