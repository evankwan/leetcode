DELETE Person
FROM 
    Person
LEFT JOIN Person p2 ON Person.email = p2.email
WHERE 
    p2.id IS NOT NULL
    AND Person.id > p2.id;