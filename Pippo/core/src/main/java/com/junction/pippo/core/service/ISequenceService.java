package com.junction.pippo.core.service;


import com.junction.pippo.core.model.SequenceEntity;


public interface ISequenceService extends ICrudService<SequenceEntity, String> {
    SequenceEntity getByName(String name);
}
