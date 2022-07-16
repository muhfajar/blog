---
title: Playing in Ruby Mine
date: 2018-01-06T14:39:00.000+07:00
hero: images.unsplash.com/photo-1551122102-63cd339bfaab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80
excerpt: My journey using Ruby for the first time
categories:
- tech
tags:
- journal
- ruby
- tech
- programing-language
- rails
- python
authors:
- Muhamad Fajar

---
I started as a Ruby dev in my new job, previously I worked as a PHP and Python dev and I found Ruby is slightly different sometimes, especially with PHP. The first time I read Ruby documentation, Ruby syntax is familiar, that looks like Python with some additional words at every end of a function. For example:

```python
def foo():
    print('bar')
```

```ruby
def foo
    puts 'bar'
end
```

For framework, Ruby has Rails (not only Rails actually, many frameworks out there) and when I came to my new job, I also had only 3 days to learn what Ruby is and what is Rails, so basically I am learning by doing after my quick learn from digging up Ruby and Rails documentation.

On my first Jira task, I really struggle to find out the _magic_ behind Rails, a lot of classes or modules are not implicitly imported to another class, but I can use that class easily. Different from Django, you must import or define anything you plan to use. In Rails as long as your naming conventions follow documentation you can save a few lines of code (except if you're using unofficial Rails Gem, you must import class using the 'use' command)

## Handy Built-in Method

### try() Object

Imagine, you don't worry about how to handle `out of index array` in Rails, I just found how to handle array with elegance (yes, as you know, I just to know Ruby about 1 week since this post was done I write), just put an object `try()` after that, you don't worry about the possibility of that object being `nil` and thus raising an exception. See code snip below:

```ruby
[].try(:[], 1) # => nil
[10].try(:[], 1) # => nil
[10, 20].try(:[], 1) # => 20
[10, 20, 30].try(:[], 1) # => 20

{}.try(:foo) # => nil
{ foo: 'bar' }.try(:foo) # => 'bar'
```

Disclaimer: `try()` an object is good to implement when you did not have much time to validate all returns that came from another object, this will prevent your code from process break, but this technique is not a replacement for good techniques like validations and default database values.

### Rails ORM: Active Record

What is ORM?

> Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language. There are both free and commercial packages available that perform object-relational mapping, although some programmers opt to construct their own ORM tools.[\[1\]](https://en.wikipedia.org/wiki/Object-relational_mapping)

In other words, ORM is modified or retrieved by writing query statements, and it lets you interact with that data as though it was a normal Ruby object.

For example, this query to fetch all data from `table`:

```mysql
SELECT * FROM table
```

Active record (ORM in Rails) will wrap that into `all()` object.

```ruby
Table.all()
```

### Array Manipulation

Rails have bunched of methods to make coding more fun, for manipulate array Rails have  `select`, `each`, `map`, `reject` and `reduct`. Let's pick one sample to see what makes this method so special.

Case study:  
We have a dictionary of employees like this:

```ruby
employee = [
  {
    name: "Andi", 
    title: "Software Engineer",
    probation: false,
    salary: "1100" 
  },  
  {
    name: "Ipeh", 
    title: "Software Engineer", 
    probation: false,
    salary: "1200"
  },  
  {
    name: "Rojak", 
    title: "Junior Software Engineer",
    probation: true,
    salary: "800"
  }
]
```

Next, we want to sum all salaries if an employee has passed the probation

```ruby
# without each or select

e1 = employee[0][:probation]
e2 = employee[1][:probation]
e3 = employee[2][:probation]

total = 0

unless e1
    total += employee[0][:salary].to_i
end

unless e2
    total += employee[1][:salary].to_i
end

unless e3
    total += employee[2][:salary].to_i
end

puts total
```

Let's compare if we use some handy method to manipulate the array

```ruby
# use reject, map and reduce

puts employee.reject{ |e| e[:probation] }.map{ |y| y[:salary].to_i }.reduce(:+)
```

This was my adventure using Ruby so far, and that much more I guess when I start building more complex applications. See you next time!
