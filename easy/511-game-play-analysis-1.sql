SELECT
    a.player_id,
    min(a.event_date) as "first_login"
FROM Activity a
GROUP BY player_id