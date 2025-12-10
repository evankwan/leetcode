SELECT DISTINCT(p.email) as "Email"
FROM Person p
LEFT JOIN Person p2
ON p.email = p2.email
WHERE
    p.id != p2.id