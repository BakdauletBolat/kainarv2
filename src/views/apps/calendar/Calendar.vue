<script setup>
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import FullCalendar from '@fullcalendar/vue3'
import { useRtl } from 'vuetify'
import {
  INITIAL_EVENTS,
  createEventId,
} from './event-utils'

const currentEvents = ref([])
const { isRtl } = useRtl()

const handleDateSelect = selectInfo => {
// eslint-disable-next-line no-alert
  const title = prompt('Please enter a new title for your event')
  const calendarApi = selectInfo.view.calendar

  calendarApi.unselect()
  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    })
  }

/* eventAdd:
eventChange:
eventRemove:
*/
}

const handleEventClick = clickInfo => {
// eslint-disable-next-line no-alert
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`))
    clickInfo.event.remove()

/* eventAdd:
eventChange:
eventRemove:
*/
}

const handleEvents = events => {
  currentEvents.value = events

/* eventAdd:
eventChange:
eventRemove:
*/
}

const calendarOptions = computed(() => {
  return {
    plugins: [
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin,
    ],
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    direction: isRtl.value ? 'rtl' : 'ltr',
    select: handleDateSelect,
    eventClick: handleEventClick,
    eventsSet: handleEvents,

    /* eventAdd:
eventChange:
eventRemove:
*/
  }
})

// breadcrumbs
const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    to: { path: '/' },
  },
  {
    title: 'Apps',
    disabled: true,
  },
  {
    title: 'Calendar',
    disabled: true,
  },
]
</script>

<template>
  <VRow>
    <!-- Breadcrumbs -->
    <VCol cols="12">
      <VBreadcrumbs
        :items="breadcrumbs"
        divider="-"
        class="px-0"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <FullCalendar :options="calendarOptions" />
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@import "@/styles/libs/calendar";
</style>
