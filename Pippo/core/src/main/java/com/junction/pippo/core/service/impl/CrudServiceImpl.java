package com.junction.pippo.core.service.impl;


import com.junction.pippo.core.model.EntityBase;
import com.junction.pippo.core.repository.ICrudRepository;
import com.junction.pippo.core.service.ICrudService;

import java.io.Serializable;
import java.util.List;


public class CrudServiceImpl<T, ID extends Serializable> implements ICrudService<T, ID> {

    protected ICrudRepository<T, ID> crudRepository;

    public CrudServiceImpl(ICrudRepository<T, ID> crudRepository) {
        this.crudRepository = crudRepository;
    }


    @Override
    public <S extends T> S save(S entity) {
        return crudRepository.save(entity);
    }

    @Override
    public <S extends T> S update(S entity) {
        return crudRepository.update(entity);
    }

    @Override
    public T findOne(ID id) {
        return crudRepository.findOne(id);
    }

    @Override
    public boolean exists(ID id) {
        return crudRepository.exists(id);
    }

    @Override
    public List<T> findAll() {
        return crudRepository.findAll();
    }


    @Override
    public List<T> findAll(ID id) {
        return crudRepository.findAll(id);
    }

    @Override
    public Long count() {
        return crudRepository.count();
    }


    @Override
    public boolean delete(ID id) {
        T entity = findOne(id);
        crudRepository.delete(entity);
        return true;
    }


    @Override
    public boolean delete(T entity) {
        crudRepository.delete(entity);
        return true;
    }

    private Long getId(T entity) {
        if (entity instanceof EntityBase) {
            return ((EntityBase) entity).getId();
        }
        return null;
    }


    @Override
    public Long count(String name) {
        return crudRepository.count(name);
    }


}
