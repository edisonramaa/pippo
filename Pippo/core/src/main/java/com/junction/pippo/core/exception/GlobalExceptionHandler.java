package com.junction.pippo.core.exception;


import com.junction.pippo.core.model.ResponseObj;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**

 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Handles the general error case. print the exception
     *
     * @param e the exception not handled by other exception handler methods
     * @return {@link ResponseObj} which contains the error message and response status with JSON format
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ResponseObj> handleGenericException(Exception e) {
        e.printStackTrace();
        ResponseObj responseObj = new ResponseObj.ResponseObjBuilder()
                .message(e.getMessage())
                .responseStatus(false)
                .build();
        return new ResponseEntity<>(responseObj, HttpStatus.OK);
    }


    /**
     * Handles the customize {@link ExpiredJwtException} expired jwt exception error case . print the exception
     *
     * @param runtimeException the exception not handled by other exception handler methods
     * @return {@link ResponseObj} which contains the error message and response status with JSON format
     */

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<ResponseObj> handleExpiredJwtException(RuntimeException runtimeException) {
        runtimeException.printStackTrace();
        ResponseObj responseObj = new ResponseObj.ResponseObjBuilder()
                .message(runtimeException.getMessage())
                .responseStatus(false)
                .build();
        return new ResponseEntity<>(responseObj, HttpStatus.OK);
    }

    /**
     * Handles the method argument not valid exception. print the exception
     *
     * @param e the exception not handled by other exception handler methods
     * @return {@link ResponseObj} which contains the error message and response status with JSON format
     */

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ResponseObj> methodArgumentNotValidException(Exception e) {
        e.printStackTrace();
        ResponseObj responseObj = new ResponseObj.ResponseObjBuilder()
                .message(e.getMessage())
                .responseStatus(false)
                .build();
        return new ResponseEntity<>(responseObj, HttpStatus.OK);

    }

    /**
     * Handles the Data database level DataIntegrityViolationException. print the exception
     *
     * @param e the exception not handled by other exception handler methods
     * @return {@link ResponseObj} which contains the error message and response status with JSON format
     */

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ResponseObj> constraintViolationException(Exception e) {
        ResponseObj responseObj = new ResponseObj.ResponseObjBuilder()
                .message(e.getMessage())
                .responseStatus(false)
                .build();
        return new ResponseEntity<>(responseObj, HttpStatus.OK);
    }

    /**
     * Handles the Data database level TransientPropertyValueException. print the exception
     *
     * @param e the exception not handled by other exception handler methods
     * @return {@link ResponseObj} which contains the error message and response status with JSON format
     */

    @ExceptionHandler(InvalidDataAccessApiUsageException.class)//TO DO
    public ResponseEntity<ResponseObj> transientPropertyValueException(Exception e) {
        ResponseObj responseObj = new ResponseObj.ResponseObjBuilder()
                .message(e.getMessage())
                .responseStatus(false)
                .build();
        return new ResponseEntity<>(responseObj, HttpStatus.OK);
    }

    /**
     * Handles the Data database level ObjectOptimisticLockingFailureException. print the exception
     *
     * @param e the exception not handled by other exception handler methods
     * @return {@link ResponseObj} which contains the error message and response status with JSON format
     */

    @ExceptionHandler(ObjectOptimisticLockingFailureException.class)
    public ResponseEntity<ResponseObj> objectOptimisticLockingFailureException(Exception e) {
        ResponseObj responseObj = new ResponseObj.ResponseObjBuilder()
                .message(e.getMessage())
                .responseStatus(false)
                .build();
        return new ResponseEntity<>(responseObj, HttpStatus.OK);
    }

    /**
     * Handles the Data database level SignatureException. print the exception
     *
     * @param e the exception not handled by other exception handler methods
     * @return {@link ResponseObj} which contains the error message and response status with JSON format
     */
    @ExceptionHandler(SignatureException.class)
    public ResponseEntity<ResponseObj> signatureException(Exception e) {
        ResponseObj responseObj = new ResponseObj.ResponseObjBuilder()
                .message("Sorry!! Someone has already updated the record")
                .responseStatus(false)
                .build();
        return new ResponseEntity<>(responseObj, HttpStatus.OK);
    }


    /**
     * Handles custom exception
     *
     * @param e the exception not handled by other exception handler methods
     * @return {@link ResponseObj} which contains the error message and response status with JSON format
     */
    @ExceptionHandler(PippoException.class)
    public ResponseEntity<ResponseObj> dracException(RuntimeException e) {
        e.printStackTrace();
        Object data = null;
        if (e instanceof PippoException) {
            data = ((PippoException) e).getData();
        }
        ResponseObj responseObj = new ResponseObj.ResponseObjBuilder()
                .message(e.getMessage())
                .responseStatus(false)
                .result(data)
                .build();
        return new ResponseEntity<>(responseObj, HttpStatus.OK);
    }
}
