# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.first || User.create(username: 'Test', email: 'test@test.com', password: 'password', password_confirmation: 'password')

posts = [
    {
        title: 'Seed Post',
        image: 'umym1nuwdrtldxmmjmkt',
        content: 'Hello World! This is the default first post from db:seed',
        time: 'database inception'
    }
]

comments = [
    {
        content: 'test comment',
        user_id: '1',
        post_id: '1',
        time: 'N/A'
    },
    {
        content: 'test comment 2',
        user_id: '1',
        post_id: '1',
        time: 'N/A'
    }
]

posts.each do |post_hash|
  user.posts.create(post_hash)
end

comments.each do |comment_hash|
  user.comments.create(comment_hash)
end