import React from 'react'
import { View, Text, TouchableOpacity , Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'

const NearbyjobCard = ({job , handleNavigate}) => {
  console.log("JOB",job);
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={() => handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image  
        source={{uri: checkImageURL(job.employer_logo) ? job.employer_logo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}}
        resizeMode='contain'
        style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{job.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
        {job.job_title}
        </Text>
        <Text style={styles.jobType}>
          {job.job_employment_type}
        </Text>
        </View>
    </TouchableOpacity>
  )
}

export default NearbyjobCard