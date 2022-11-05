package com.junction.pippo.core.utils;

import java.sql.Time;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.*;
import java.util.Calendar;
import java.util.Date;

import static java.time.temporal.ChronoUnit.DAYS;

/**

 */
public class DateUtils {

    /**
     * This method is used to generate current date time
     *
     * @return current date time
     */
    public static LocalDateTime now() {
        return LocalDateTime.now();
    }

    public static LocalDate today() {
        return LocalDate.now();
    }

    /**
     * This method is used to generate current date time with added minute
     *
     * @param minute
     * @return current date time with added minute
     */
    public static LocalDateTime addMinuteToDateTime(long minute) {
        return DateUtils.now().plusMinutes(minute);
    }

    /**
     * This method is used to convert local date time into util date
     *
     * @param localDateTime
     * @return util date
     */

    public static Date localDateTimeIntoUtilDate(LocalDateTime localDateTime) {
        return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
    }

    /**
     * This method is used to get current date time in millisecond
     *
     * @return millisecond
     */
    public static Long getCurrentMillisecond() {
        return System.currentTimeMillis();
    }

    /**
     * This method is used to convert string time into sql time
     *
     * @param time
     * @return
     */
    public static Time convertStringTimeIntoSqlHourMinTime(String time) {
        DateFormat formatter = new SimpleDateFormat("hh:mm");
        try {
            return new Time(formatter.parse(time).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Time convertStringTimeIntoSqlTime(String time) {
        DateFormat formatter = new SimpleDateFormat("hh:mm a");
        try {
            return new Time(formatter.parse(time).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Time convertToTime(String time) {
        DateFormat formatter = new SimpleDateFormat("hh:mm:ss");
        try {
            return new Time(formatter.parse(time).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String convertSqlTimeIntoStringTime(Time time) {
        DateFormat formatter = new SimpleDateFormat("hh:mm:ss a");
        return formatter.format(time);
    }

    public static String convertSqlTimeIntoStringHourMinTime(Time time) {
        DateFormat formatter = new SimpleDateFormat("hh:mm");
        return formatter.format(time);
    }

    public static Date getCurrentDate() {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String formatted = dateFormat.format(new Date().getTime());
        try {
            return dateFormat.parse(formatted);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }


    public static Date getCurrentTime(String time) {
        DateFormat formatter = new SimpleDateFormat("hh:mm:ss a");
        try {
            return formatter.parse(time);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Date getCurrentDateIntoTimeFormat() {
        SimpleDateFormat simpleTimeFormat = new SimpleDateFormat("hh:mm:ss a");
        try {
            return simpleTimeFormat.parse(simpleTimeFormat.format(Calendar.getInstance().getTime()));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String convertSqlTimeIntoString(Time time) {
        return time.toString();
    }


    public static Month getCurrentMonth() {
        Month currentMonth = now().getMonth();
        return currentMonth;

    }

    public static Integer getCurrentYear() {
        return now().getYear();
    }

    public static boolean isLeapYear(Integer year) {
        LocalDate currentDate = LocalDate.now();
        return currentDate.withYear(year).isLeapYear();
    }

    public static Integer getTotalDaysOfMonth(Integer year, Integer month) {
        return YearMonth.of(year, month).lengthOfMonth();
    }

    public static Integer getDayOfWeek(LocalDate dateInAd) {
        return dateInAd.getDayOfWeek().getValue();
    }

    public static LocalDate getLocalDate(String datInAdSeparatedByDash) {
        if (!datInAdSeparatedByDash.contains("-")) {
            throw new RuntimeException("The format of " + datInAdSeparatedByDash + " should be in yyyy-MM-dd date format");
        }
        String[] adDate = datInAdSeparatedByDash.split("-");
        LocalDate localDate = LocalDate.of(
                Integer.parseInt(adDate[0]),
                Integer.parseInt(adDate[1]),
                Integer.parseInt(adDate[2])
        );
        return localDate;
    }

    public static long getDateDiffernceWithToday(LocalDate localDate) {
        LocalDate today = LocalDate.now();
        return DAYS.between(localDate, today);
    }

    public static long getDateDifference(LocalDate subtractDateFrom, LocalDate subtractDateWith) {
        return DAYS.between(subtractDateFrom, subtractDateWith);
    }

    public static String getMonthName(Integer month) {
        return Month.of(month).name();
    }

    public static DayOfWeek getDayOfWeek(Integer day) {
        return DayOfWeek.of(day);
    }

    public static Date convertStringToDate(String date) {
        try {
            Date parsedDate = new SimpleDateFormat("yyyy-MM-dd").parse(date);
            return parsedDate;
        } catch (ParseException px) {
            px.printStackTrace();
        }
        return null;
    }

}
