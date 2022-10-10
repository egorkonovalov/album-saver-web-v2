<script lang="ts">
  import { MusicGetterService } from "$lib/modules/musicsearch/searchrequest.service";
  import type { MusicSearchRequest } from "$lib/modules/musicsearch/interfaces/musicsearchrequest.interface";
  import type { Album } from "$lib/modules/musicsearch/interfaces/album.interface";

  let fakeResult: Album[] = [
    {
      youTubeMusicPlaylistUrl:
        "https://music.youtube.com/playlist?list=OLAK5uy_mhD_o9tcpHCQXLBU1WFFDQF6dIj9jc05Y",
      title: "False Prophet - Bob Dylan",
      imageUrl:
        "https://lh3.googleusercontent.com/G3wlhTpUsbpzaoW3NJ4lLj9QQz-lbIsvi28f-BeR2bkEbpYrJeU0a_l98C-ahDk82cJsMBXei29WSImI=w544-h544-l90-rj",
    },
    {
      youTubeMusicPlaylistUrl:
        "https://music.youtube.com/playlist?list=OLAK5uy_lW86wmMWuc-nCaDKENMtY9YdhNMCvqLMc",
      title: "Bob Dylan (2013 remastered from original 1962) - Bob Dylan",
      imageUrl:
        "https://lh3.googleusercontent.com/xz15mAPG2pMzupj6CkTylTvR974fSh8CWNH6NVeHV81SWDRThQLtP66DPzsZOXrtgAOnNiBWCxe1Pihl=w544-h544-l90-rj",
    },
    {
      youTubeMusicPlaylistUrl:
        "https://music.youtube.com/playlist?list=OLAK5uy_lhegr5MW0nSzoF0QWp9LwWvQOLBu2e-As",
      title: "Bob Dylan: The Live Collection, Vol. 5 - Bob Dylan",
      imageUrl:
        "https://lh3.googleusercontent.com/aWgmejHPKhaMldqzAUgAdV4yt--b7Ce7bfkogvxsq6p8Gde2DbpRvV7kA9kpzVGCOUsRrmfusZRVp8g=w544-h544-l90-rj",
    },
    {
      youTubeMusicPlaylistUrl:
        "https://music.youtube.com/playlist?list=OLAK5uy_k71ievbOBAyyKXyYmdzgMkaYeT7dFa9UE",
      title: "Bob Dylan - House of the Risin' Sun - Bob Dylan",
      imageUrl:
        "https://lh3.googleusercontent.com/k1XHnx9zuEvqIAjgXlDvQcbd_ZxkNY1BePdANT9sTIhP1VyAJtRG5NKH0Md17a4rVvG-Y8mlXEf753um=w544-h544-l90-rj",
    },
    {
      youTubeMusicPlaylistUrl:
        "https://music.youtube.com/playlist?list=OLAK5uy_khcPqXwihpCF8kM-OszTYfy1YG0NkAApk",
      title: "Bob Dylan: Live In Colorado '76 - Bob Dylan",
      imageUrl:
        "https://lh3.googleusercontent.com/7D7EWzOS80ZCZoz2G0mBCYgPV52hHgmDvqGdquhVgE4cGZzZnJnf8OnT5ZTNPEmliWjhJNwZWJucIXXQ=w544-h544-l90-rj",
    },
    {
      youTubeMusicPlaylistUrl:
        "https://music.youtube.com/playlist?list=OLAK5uy_nGDIIidnLiuKBTXMNYP16YnFsnqjdCdNo",
      title: "Live In Sydney 1986 - Part One - Bob Dylan",
      imageUrl:
        "https://lh3.googleusercontent.com/xU0p39OCE21SYk0hZwQMcK2GuiT-e_cnh4YVe1W90Pk7kWryUgjziLxzjYGXUeXgBA21muYDr-jWFWe4Jg=w544-h544-l90-rj",
    },
    {
      youTubeMusicPlaylistUrl:
        "https://music.youtube.com/playlist?list=OLAK5uy_lT8-KoA3qNhjC9pA7yDrVkiXT5GBla09U",
      title:
        "The Freewheelin' (Hd Remastered Edition, Doxy Collection) - Bob Dylan",
      imageUrl:
        "https://lh3.googleusercontent.com/yeN9-Be4xp2ZCAMQywXWnPtubSIVESYY7bIiz8fv_4WPeaMj7PEI_ZCo0n5T9PMqifLnev9tLEID8qJ8=w544-h544-l90-rj",
    },
    {
      youTubeMusicPlaylistUrl:
        "https://music.youtube.com/playlist?list=OLAK5uy_kROlBj9zIOhlhNd2wXXroSrj8WKvUnYl4",
      title: "BOB DYLAN - IT COULD BE A MYTH - BOB DYLAN",
      imageUrl:
        "https://lh3.googleusercontent.com/xBIBf4IhB5rmiu7X6Dpy04i-GK7pUWTD7obhJKvJ3FIxNQyFFt9Daj_E4zbwoWhQdnylT6nVsBvIdI0-=w544-h544-l90-rj",
    },
  ];

  async function getFakeResult() {
    return Promise.resolve(fakeResult);
  }

  export let query: MusicSearchRequest;

  async function getAlbums(): Promise<Album[]> {
    let getter = new MusicGetterService();
    let result = await getter.getMusic(query);
    // let result = await getFakeResult();
    return result;
  }
</script>

{#await getAlbums() then albums}
  <div class="grid grid-cols-2 p-4 gap-4">
    {#each albums as { youTubeMusicPlaylistUrl, title, imageUrl }}
      <div class="flex flex-col gap-2">
        <img src={imageUrl} alt={title} class="w-full rounded-lg" />
        <p class="truncate">{title}</p>
      </div>
    {/each}
  </div>
{/await}
