-- FIND EARLIEST DATE A USER JOINED
SELECT
	DATE_FORMAT(MIN(created_at), "%M %D %Y" ) AS earliest_day
FROM users;

-- FIND EMAIL OF EARLIEST DATE A USER JOINED
SELECT *
FROM users WHERE created_at =
	(SELECT MIN(created_at) FROM users);

-- USERS ACCORDING TO THE MONTH THEY JOINED
SELECT
	MONTHNAME(created_at) AS month,
	COUNT(*) AS count
FROM users
GROUP BY month
ORDER BY count DESC;

-- COUNT NUMBER OF USERS WHO USE YAHOO
SELECT COUNT(*) AS yahoo_users
FROM users
WHERE email LIKE '%@yahoo.com';

-- COUNT NUMBER OF ALL EMAILS
SELECT 
	CASE
	 	WHEN email LIKE '%@yahoo.com' THEN 'gmail'
	 	WHEN email LIKE '%@gmail.com' THEN 'yahoo'
	 	WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
		ELSE 'other'
	END AS provider,
	COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;
