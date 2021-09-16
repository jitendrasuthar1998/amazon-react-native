import React, { useState, useCallback } from 'react';
import { View, Text, useWindowDimensions, StyleSheet, FlatList, Image, ScrollView } from 'react-native';


export default function ImageCarousel({ images }: { images: string[] }) {

  const [activeIndex, setActiveIndex] = useState(1);
  const windowWidth = useWindowDimensions().width;

  const onFlatlistUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0)
    }
  }, []);

  return (
    <View>
      <FlatList data={images}
        renderItem={({ item }) => (
          <Image style={[styles.image, { width: windowWidth - 40 }]} source={{ uri: item }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => index.toString()}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />

      <View style={styles.dots}>
        {images.map((imgae, index) => (
          <View style={[styles.dot, {
            backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'
          }]} key={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {

  },
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain'
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    backgroundColor: '#ededed',
  }
})