package com.junction.pippo.core.repository;


import com.junction.pippo.core.model.SequenceEntity;

/**

 */
public interface ISequenceRepository extends ICrudRepository<SequenceEntity, Long> {
    SequenceEntity getByName(String name);
}
