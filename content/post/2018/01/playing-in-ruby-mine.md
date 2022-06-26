---
title: Playing in Ruby Mine
date: 2018-01-06
hero:
  '0': h
  '1': t
  '2': t
  '3': p
  '4': s
  '5': ":"
  '6': "/"
  '7': "/"
  '8': i
  '9': m
  '10': a
  '11': g
  '12': e
  '13': s
  '14': "."
  '15': u
  '16': n
  '17': s
  '18': p
  '19': l
  '20': a
  '21': s
  '22': h
  '23': "."
  '24': c
  '25': o
  '26': m
  '27': "/"
  '28': p
  '29': h
  '30': o
  '31': t
  '32': o
  '33': "-"
  '34': '1'
  '35': '5'
  '36': '5'
  '37': '1'
  '38': '1'
  '39': '2'
  '40': '2'
  '41': '1'
  '42': '0'
  '43': '2'
  '44': "-"
  '45': '6'
  '46': '3'
  '47': c
  '48': d
  '49': '3'
  '50': '3'
  '51': '9'
  '52': b
  '53': f
  '54': a
  '55': a
  '56': b
  '57': "?"
  '58': i
  '59': x
  '60': l
  '61': i
  '62': b
  '63': "="
  '64': r
  '65': b
  '66': "-"
  '67': '1'
  '68': "."
  '69': '2'
  '70': "."
  '71': '1'
  '72': "&"
  '73': i
  '74': x
  '75': i
  '76': d
  '77': "="
  '78': M
  '79': n
  '80': w
  '81': x
  '82': M
  '83': j
  '84': A
  '85': '3'
  '86': f
  '87': D
  '88': B
  '89': '8'
  '90': M
  '91': H
  '92': x
  '93': w
  '94': a
  '95': G
  '96': '9'
  '97': '0'
  '98': b
  '99': y
  '100': '1'
  '101': w
  '102': Y
  '103': W
  '104': d
  '105': l
  '106': f
  '107': H
  '108': x
  '109': '8'
  '110': f
  '111': G
  '112': V
  '113': u
  '114': f
  '115': D
  '116': B
  '117': '8'
  '118': f
  '119': H
  '120': x
  '121': '8'
  '122': "&"
  '123': a
  '124': u
  '125': t
  '126': o
  '127': "="
  '128': f
  '129': o
  '130': r
  '131': m
  '132': a
  '133': t
  '134': "&"
  '135': f
  '136': i
  '137': t
  '138': "="
  '139': c
  '140': r
  '141': o
  '142': p
  '143': "&"
  '144': w
  '145': "="
  '146': '2'
  '147': '9'
  '148': '4'
  '149': '2'
  '150': "&"
  '151': q
  '152': "="
  '153': '8'
  '154': '0'
  heading: Test heading
  maxWidthPX: "654"
excerpt: My journey using Ruby for the first time
categories:
- tech
tags:
- ruby
- tech
- programing-language
- rails
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