# Running the application

# Schema migration 
Make sure you are in the blog directory, then run the following command: 
python manage.py migrate


# Schema population
Currently this is a manual step - TODO use proper data migration

Open up a terminal and type the following into the shell:

---- 
python manage.py shell

from posts.models import Post

# Determine the number of Posts in the database
Post.objects.all() 

# Currently these two steps must be done for each file you are wanting to view on the blog 

# Insert the content
post = Post(content = """<content goes here>""")

# Save the new entry into the database
post.save()

----

# Run server
Make sure you are in the blog directory, then run the following command: 

manage.py runserver 4000

# Run client
cd blog-app

# Install dependencies (pull packages down from npm)
yarn

yarn start 


